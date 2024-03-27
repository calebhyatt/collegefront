import {
	Avatar,
	AvatarGroup,
	AvatarIcon,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem
} from '@nextui-org/react'
import { User } from 'lucide-react'

interface NavbarUserProps {
	name: string
	image: string
}

export default function NavbarUser({ name, image }: NavbarUserProps) {
	return (
		<Dropdown>
			<DropdownTrigger>
				<Avatar
					src={image || 'https://i.pravatar.cc/150?u=a042581f4e29026024d'}
					fallback={<User />}
					className="h-14 w-14 overflow-hidden rounded-full"
				/>
			</DropdownTrigger>
			<DropdownMenu>
				<DropdownItem></DropdownItem>
				<hr />
				<DropdownItem></DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
