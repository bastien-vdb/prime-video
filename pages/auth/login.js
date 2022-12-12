/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);

  return (
    <div className="w-full min-h-screen text-black font-poppins pb-4 mb-4">
      <header className="w-full mb-12">
        <nav className="w-36 mx-auto">
          <img src="../welcome/login-logo.png" alt="login-logo" />
        </nav>
      </header>
      <main className=" w-[350px] mx-auto mt-4 p-5 border">
        <form action="" name="signIn" method="post">
          <h1 className=" text-3xl font-medium mb-6">S'identifier</h1>

          <div className="identifiers mb-8">
            <div>
              <label
                htmlFor="auth_email"
                className="block text-sm font-bold mb-1"
              >
                Adresse e-mail ou numéro de téléphone portable
              </label>
              <div className="table table-fixed w-full relative">
                <input
                  type="email"
                  id="auth_email"
                  name="email"
                  placeholder="Email ou numéro de téléphone"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="table-cell w-full h-12 my-[2px]
                 pl-3 pr-7 mb-4 bg-slate-200 text-[100%]"
                />
                <div
                  className="float-right absolute right-2 top-4 cursor-pointer"
                  onClick={() => setEmail("")}
                >
                  <img src="../welcome/cancel-16.png" alt="email-eraser" />
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex justify-between mb-1">
                <label
                  htmlFor="auth_pwd"
                  className="inline-block text-sm font-bold"
                >
                  Mot de passe
                </label>

                <div className="inline-block text-right text-sm ">
                  <a href="">Mot de passe oublié</a>
                </div>
              </div>
              <div className="table table-fixed w-full relative">
                <input
                  type="password"
                  name="password"
                  id="auth_pwd"
                  placeholder="Mot de passe Amazon"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="table-cell w-full h-12 my-[2px]
                 pl-3 pr-7 mb-0 bg-slate-200 text-[100%]"
                />
                <div
                  className="float-right absolute right-2 top-4 cursor-pointer"
                  onClick={() => setPassword("")}
                >
                  <img src="../welcome/cancel-16.png" alt="pwd-eraser" />
                </div>
              </div>
            </div>
          </div>
          <div className="signin mb-8">
            <span className="a_button inline-block w-full bg-[#f0c14b] rounded-[3px] border-solid border-[1px] border-loginBtn cursor-pointer p-0 text-center align-middle">
              <span className="a_button_inner block relative overflow-hidden h-7  bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] rounded-sm shadow-newAcc">
                <input
                  type="submit"
                  id="signInSubmit"
                  value="S'identifier"
                  className="absolute inline-block top-0 left-0 w-full h-full cursor-pointer my-auto"
                />
              </span>
            </span>
            <div
              id="legal_text_row"
              className="w-full mt-5 text-sm leading-normal"
            >
              En continuant, vous acceptez les{" "}
              {<a href="/legal/terms">Conditions d'utilisation</a>}
              d'Amazon. Veuillez consulter notre{" "}
              {
                <a href="/legal/privacy">
                  Politique de confidentialité, notre Avertissement relatif aux
                  cookies et notre Avis sur les publicités basées sur les
                  centres d'intérêt
                </a>
              }
              .
            </div>
            <div className="mt-4 ml-2">
              <label htmlFor="auth_remember_me">
                <input
                  type="checkbox"
                  className="w-[13px] h-[13px] relative "
                />
                <span className="ml-2">
                  Rester connecté
                  <span className="ml-2">Détails</span>
                </span>
              </label>
            </div>
          </div>
          <div className="sign_up_asker relative text-center top-[2px] pt-1 mb-4">
            <h5 className="inline-block relative bg-[#fff] px-2 z-[2]">
              Nouveau chez Amazon ?
            </h5>
          </div>
          <span className="a_button inline-block w-full bg-[#e7e9ec] rounded-[3px] border-solid border-[1px] border-newAccBorder cursor-pointer p-0 text-center align-middle">
            <span className="a_button_inner block relative overflow-hidden h-7  bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] rounded-sm shadow-newAcc ">
              Créer votre compte Amazon
            </span>
          </span>
        </form>
      </main>
      <footer>
        <div className="mt-7">
          <div className="">
            <div className="sign-in-divider-inner h-11 mb-[-18px] "></div>
          </div>
        </div>
        <div className="mb-4 flex justify-center space-x-14 ">
          <Link href="/conditions">
            Conditions d'utilisation et Politique de confidentialité
          </Link>
          <Link href="/avis">Donnez-nous votre avis</Link>
          <Link href="/help">Aide</Link>
        </div>
        <div className="text-center">
          <span className="text-sombres-grayText text-center">
            © 1996-2022, Amazon.com, Inc. ou ses filiales
          </span>
        </div>
      </footer>
    </div>
  );
}
