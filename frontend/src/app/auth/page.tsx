"use client";

import { useSignIn } from "@/apis/Authentication";
import { Fragment } from "react";
import { useUserContext } from "@/providers/UserProvider";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@/components/Form/TextField";
import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";

const SignInSchema = z.object({
  username: z.string(),
  password: z.string(),
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

const Page = () => {
  const { onLogin } = useUserContext();

  const signInSchema = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { control, handleSubmit } = signInSchema;

  const { mutate } = useSignIn({
    onSuccess: (data) => {
      onLogin(data.token);
    },
  });

  const onSubmit = handleSubmit(
    (onValid) => {
      mutate(onValid);
    },
    (error) => {
      console.log(error);
    }
  );

  return (
    <Fragment>
      <TextField control={control} name="username" label="username" />
      <TextField control={control} name="password" label="password" />
      <Button onClick={onSubmit}>
        <Typography>Login</Typography>
      </Button>
    </Fragment>
  );
};

export default Page;
