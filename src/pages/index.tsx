import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useRouter } from "next/router"
import styled from "styled-components"

import AuthLayout from "@/components/layouts/AuthLayout"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Stack from "@/components/ui/Stack"
import Text from "@/components/ui/Text"

import { setToken } from "@/utils/redux/slices/user"
import { AppState } from "@/utils/redux/store"

const Home = () => {
  const token = useSelector<AppState, string>((state) => state.user.token)
  const router = useRouter()
  useEffect(() => {
    if (token) {
      router.push("/adverts")
    }
  }, [token, router])

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState("")

  useEffect(() => setError(""), [username, password])

  const dispatch = useDispatch()

  const login = () => {
    // TODO: replace with mutation + add next-auth
    fetch(process.env.NEXT_PUBLIC_API_URL + "/users/login/", {
      method: "POST",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: username, password }),
    })
      .then((r) =>
        r.json().then((rr) => {
          if (!r.ok) {
            throw Error(rr.detail as string)
          }
          if ("access" in rr) {
            dispatch(setToken(rr.access as string))
          }
        }),
      )
      .catch((e) => {
        setError(e.message)
      })
  }

  return (
    <AuthLayout>
      <StyledStack padding="40" gap="40">
        <Input name="username" label="Логин" value={username} onChange={setUsername} />
        <Input name="password" label="Пароль" value={password} onChange={setPassword} />
        <Button onClick={login}>Войти</Button>
        <Text color="error">{error}</Text>
      </StyledStack>
    </AuthLayout>
  )
}

const StyledStack = styled(Stack)`
  flex: 1;
`

export default Home
