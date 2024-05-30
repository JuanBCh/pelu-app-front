import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from "@/utils/postgres";
const bcrypt = require("bcrypt");

const login = async (credentials) => {
  try {
    const adminTable = await pool.connect();

    const user = await adminTable.query(
      "SELECT * FROM users WHERE user_name = $1",
      [credentials.user_name]
    );

    if (!user) throw new Error("Usuario no encontrado");

    const isPassCorrect = await bcrypt.compare(
      credentials.password,
      user.rows[0].password
    );

    if (user.rows[0].password != credentials.password && !isPassCorrect) {
      throw new Error("Contraseña incorrecta");
    }
    return user.rows[0];
  } catch (err) {
    console.log(err);
    throw new Error("Error al loguear usuario");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          console.log("ERROR EN CREDENTIALS", err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // session.accessToken = token.accessToken;
      session.user.id = token.sub;

      return session;
    },
  },
});
