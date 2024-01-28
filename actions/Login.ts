"use server";

import * as z from "zod";
import { signIn } from "next-auth/react";
import { LoginSchema } from "@/schema";
import credentials from "next-auth/providers/credentials";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export default Login;
