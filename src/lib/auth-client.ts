import { adminClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({

    baseURL: process.env.https://nexora-git-main-dulal71s-projects.vercel.app/
    plugins:[
        adminClient()
    ]
})
export const { signIn, signUp, useSession } = createAuthClient()