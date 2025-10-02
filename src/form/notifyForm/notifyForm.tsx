"use client";

import React, { useRef } from "react";
import { ButtonBox, Form, FormContentBox, InputBox, EmailInput } from "./style";

import { toast } from "react-toastify";
import { NotifyButton } from "@/component/global/notifyButton/notifyButton";

export const NotifyForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdGySRH6_2FDq8BVGIsx_l-sVHSTFUOrm08MJag7XY4sGtTfQ/formResponse?usp=pp_url",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // prevents CORS error but gives no response
        }
      );

      toast.success("Notification request sent!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      formRef.current?.reset(); // Optional: clear form fields
    } catch {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <FormContentBox>
        <InputBox>
          <EmailInput
            type="email"
            name="entry.401413858"
            placeholder="Email Address"
            aria-label="Email Address"
            required
            autoComplete="off"
          />
        </InputBox>

        <ButtonBox>
          <NotifyButton
            style={{
              minWidth: "100%",
              color: "#fff",
              textTransform: "capitalize",
              fontSize: "0.90rem",
              fontWeight: 400,
            }}
            type="submit"
            id="notify-me-button"
            text={undefined}
            ariaLabel={"notify-me-button"}
          >
            Notify Me
          </NotifyButton>
        </ButtonBox>
      </FormContentBox>
    </Form>
  );
};
