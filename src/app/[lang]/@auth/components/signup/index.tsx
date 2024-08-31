"use client";
import TransitionButton from "@/app/components/TransitionButton/TransitionButton";
import { AlertContext } from "@/app/core/client/store/alert/AlertContext";
import React, { ChangeEvent, useContext, useRef, useState } from "react";

interface Props {
  handleTransition: () => void;
  body: HTMLElement | null;
}
interface InternalState {
  email: string;
  username: string;
  password: string;
  phone: string;
  confirmPassword: string;
  // fieldErrors: ValidateErrors;
}

const initialState: InternalState = {
  email: "",
  username: "",
  password: "",
  phone: "",
  confirmPassword: "",
  // fieldErrors: {},
};

export const SignUpForm = (props: Props) => {
  const [state, setState] = useState<InternalState>(initialState);

  const refForm = useRef<HTMLFormElement>();
  const onClickRegister = async (e: React.MouseEvent) => {
    e.preventDefault();

    //   try {
    //     loadingContext?.setLoading(true)
    //     const res = await register({
    //       email: state.email,
    //       username: state.username,
    //       password: state.password,
    //       phone: state.phone,
    //     });
    //     if (typeof res === "number") {
    //       showAlert(alertContext, "Success", "register account success", () =>
    //         props.onRegisterSuccess()
    //       );
    //     } else {
    //       setState((prevState) => ({
    //         ...prevState,
    //         fieldErrors: { ...(res as ValidateErrors) },
    //       }));
    //     }
    //     loadingContext?.setLoading(false)
    //   } catch (err: unknown) {
    //     showAlert(alertContext, "Error", (err as ResponseError).body);
    //     loadingContext?.setLoading(false)

    //   }
  };

  const updateState = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form ref={refForm as any} className="pt-12 m-4">
      <div className="rounded-xl max-w-md mx-auto bg-white p-4 shadow-lg">
        <h1 className="text-center text-blue-500 text-3xl font-semibold pt-4">
          Sign Up
        </h1>
        <span className={`text-red-500 text-sm h-5 px-2 `}>
          {/* {state.fieldErrors["common"] ?? ""} */}
        </span>
        <div className="flex flex-col pt-4">
          <input
            className="border px-2 rounded-md h-9 text-base"
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            value={state.email}
            onChange={(e) => updateState(e)}
          />
          <span className={`text-red-500 text-sm h-5 px-2 `}>
            {/* {state.fieldErrors["email"] ?? ""} */}
          </span>
        </div>
        <div className="flex flex-col">
          <input
            className="border px-2 rounded-md h-9 text-base"
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            value={state.username}
            onChange={(e) => updateState(e)}
          />
          <span className="text-red-500 text-sm h-5 px-2 ">
            {/* {state.fieldErrors["username"] ?? ""} */}
          </span>
        </div>
        <div className="flex flex-col">
          <input
            className="border px-2 rounded-md h-9 text-base"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={state.password}
            onChange={(e) => updateState(e)}
          />
          <span className={`text-red-500 text-sm h-5 px-2 `}>
            {/* {state.fieldErrors["password"] ?? ""} */}
          </span>
        </div>
        <div className="flex flex-col">
          <input
            className="border px-2 rounded-md h-9 text-base"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            id="confirmPassword"
            value={state.confirmPassword}
            onChange={(e) => updateState(e)}
          />
          <span className={`text-red-500 text-sm h-5 px-2 `}>
            {/* {state.fieldErrors["confirmPassword"] ?? ""} */}
          </span>
        </div>

        <div className="flex flex-col">
          <input
            className="border px-2 rounded-md h-9 text-base"
            type="tel"
            placeholder="Phone number"
            name="phone"
            id="phone"
            value={state.phone}
            onChange={(e) => updateState(e)}
          />
          <span className={`text-red-500 text-sm h-5 px-2 `}>
            {/* {state.fieldErrors["phone"] ?? ""} */}
          </span>
        </div>

        <div className="flex flex-col items-center">
          <button
            className=" mx-auto bg-blue-500 text-white font-bold py-2 px-8 hover:bg-blue-700 rounded-full"
            type="button"
            onClick={onClickRegister}
          >
            Register
          </button>
          <h4 className="pt-4 text-sm text-gray-500 text-center pb-4">
            Already have account?{" "}
            <TransitionButton
              handleTransition={props.handleTransition}
              transitionElement={props.body}
              transitionName="page-transition"
            >
              <span className="text-blue-500 cursor-pointer hover:text-blue-700">
                Login
              </span>
            </TransitionButton>
          </h4>

          <div className="flex flex-row pt-6 mx-auto items-center w-1/2">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-base text-gray-500 font-semibold">
              Or
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <div className="py-4 flex flex-col">
            <div className="text-gray-500 text-center text-sm pb-4">
              Sign in with
            </div>
            <div className="flex flex-row gap-4 mx-auto">
              {/* <GoogleLoginBtn />
              <GoogleLoginBtn />
              <GoogleLoginBtn /> */}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
