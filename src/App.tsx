import "./styles/global.css";
import ReactIcon from "./ReactIcon";
import { Heading, Text, TextInput, Checkbox, Button } from "./components";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent} from "react";

function App() {

  const handleSubmission = (e: FormEvent) => {
    e.preventDefault();

    console.log("funcionando!")
  }

  return (
    <main className="bg-gray-900 min-h-screen flex justify-center items-center flex-col bg-react-logo bg-no-repeat bg-right">
      <header className="flex flex-col items-center">
        <ReactIcon />
        <Heading size="lg" className="mt-4 text-gray-200">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col w-full max-w-sm mt-5 gap-4" onSubmit={handleSubmission}>
        <label htmlFor="email" className="flex flex-col gap-1">
          <Text className="ml-2 text-gray-200">Email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="text" id="email" placeholder="maria@exemplo.com" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-1">
          <Text className="ml-2 text-gray-200">Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type="password" id="password" placeholder="••••••••••" />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-400 font-semibold">Lembrar de mim por 30 dias</Text>
        </label>

        <Button className="font-semibold rounded p-3">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-1 mt-6">
        <Text size="sm" asChild>
          <a href="#" className="text-gray-400 underline underline-offset-2 hover:text-gray-200 transition-colors">Esqueceu sua senha?</a>
        </Text>
        <Text size="sm" asChild>
          <a href="#" className="text-gray-400 underline underline-offset-2 hover:text-gray-200 transition-colors">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </main>
  );
}

export default App;
