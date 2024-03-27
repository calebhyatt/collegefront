import Link from 'next/link'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	// Link,
	Button
} from '@nextui-org/react'
import NavbarUser from './navbar-user'

import { getServerAuthSession } from '~/server/auth'

export default async function NavbarComponent() {
	const session = await getServerAuthSession()

	return (
		<Navbar className="bg-blue-500 py-10 text-white">
			<NavbarBrand>
				<div className="flex items-center">
					<Link href="/" className="text-2xl font-bold">
						Collegefront
					</Link>
				</div>
			</NavbarBrand>

			<NavbarContent className="hidden gap-4 sm:flex" justify="center">
				<div className="flex gap-6">
					<Link href={session ? '/api/auth/signin' : '/api/auth/signout'}>
						<Button className="rounded-2xl bg-white/10 px-6 py-2.5 font-semibold no-underline transition hover:bg-white/20">
							{session ? 'Sign Out' : 'Sign In'}
						</Button>
					</Link>

					<NavbarUser
						name={session?.user.name as string}
						image={session?.user.image as string}
					/>
				</div>
			</NavbarContent>
		</Navbar>
	)
}
