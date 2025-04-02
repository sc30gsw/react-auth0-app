import { useAuth0 } from '@auth0/auth0-react'
import './App.css'

export function App() {
	const { user, isAuthenticated, isLoading } = useAuth0()
	const { loginWithRedirect, logout } = useAuth0()

	if (!(user && isAuthenticated)) {
		return (
			<button type="button" onClick={() => loginWithRedirect()}>
				Log In
			</button>
		)
	}

	if (isLoading) {
		return <div>Loading ...</div>
	}

	const url = new URL(location.href)

	return (
		<div>
			<img src={user.picture} alt={user.name} />
			<h2>{user.name}</h2>
			<p>{user.email}</p>
			Here's your{' '}
			<a
				href={`https://my-first-auth0.vercel.app/auth/login?redirectTo=${url.href}`}
				target="_blank"
				rel="noreferrer"
			>
				first app
			</a>
			<button
				type="button"
				onClick={() =>
					logout({ logoutParams: { returnTo: window.location.origin } })
				}
			>
				Log Out
			</button>
			<a
				href="https://next14-push-notification.vercel.app/"
				target="_blank"
				rel="noreferrer"
			>
				second app
			</a>
		</div>
	)
}
