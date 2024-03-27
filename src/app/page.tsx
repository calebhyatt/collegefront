import Navbar from 'components/navbar'

import { api } from '~/trpc/server'

export default async function Home() {
	const hello = await api.post.hello({ text: 'from Caleb' })

	return (
		<main className="flex min-h-screen w-screen flex-col">
			<Navbar />

			<div className="flex flex-col items-center justify-center gap-12 px-4 py-16 ">
				<div className="flex flex-col items-center gap-2">
					<p className="text-2xl">
						{hello ? hello.greeting : 'Loading tRPC query...'}
					</p>

					<div className="flex flex-col items-center justify-center gap-4">
						{/* <p className="text-center text-2xl text-white">
							{session && <span>Logged in as {session.user?.name}</span>}
						</p> */}
					</div>
				</div>

				{/* <CrudShowcase /> */}
			</div>
		</main>
	)
}

// async function CrudShowcase() {
// 	const session = await getServerAuthSession()
// 	if (!session?.user) return null

// 	const latestPost = await api.post.getLatest()

// 	return (
// 		<div className="w-full max-w-xs">
// 			{latestPost ? (
// 				<p className="truncate">Your most recent post: {latestPost.name}</p>
// 			) : (
// 				<p>You have no posts yet.</p>
// 			)}

// 			<CreatePost />
// 		</div>
// 	)
// }
