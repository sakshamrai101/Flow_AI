import { SignInButton, SignUpButton } from "@clerk/nextjs"
import Link from "next/link"

const LandingPage = () => {
    return (
    <div>
        Landing Page (unprotected)
        <div>
            <Link href="/sign-in">
            <SignInButton>
                    Login
            </SignInButton>
            </Link>
        </div>
        <div>
            <Link href="/sign-up">
                <SignUpButton>
                    Register
                </SignUpButton>
            </Link>
        </div>
    </div>
    );
}

export default LandingPage;
