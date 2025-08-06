// components/ContactForm.js
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  max-width: 500px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  height: 120px;
`;

const ErrorText = styled.p`
  color: red;
  margin: 0;
`;

const SuccessMessage = styled.p`
  color: green;
`;

const SubmitButton = styled.button`
  padding: 0.7rem 1rem;
  background: #333;
  color: white;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
  }
`;
const LinkHome = styled.a`
  text-decoration: none;
  color: #1995ad;
  font-weight: bold;
`;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    // Имитация отправки данных
    setSubmitted(false);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>Contact Us</h2>

      <Input
        placeholder="Your Name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

      <Input
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

      <TextArea
        placeholder="Your message"
        {...register("message", { required: "Message is required" })}
      />
      {errors.message && <ErrorText>{errors.message.message}</ErrorText>}

      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </SubmitButton>

      {submitted && <SuccessMessage>Thank you! Message sent.</SuccessMessage>}
      <LinkHome href={"/"}>Back to home page</LinkHome>
    </FormWrapper>
  );
}
