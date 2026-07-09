import {Device} from "@/entities/device/model/types";
import Container from "@/shared/components/Containder";
import Image from 'next/image';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';

async function getDevices(slug: string): Promise<Device> {
	const res = await fetch(`http://localhost:3000/api/devices/${slug}`);

	if (res.status === 404) {
		notFound();
	}

	if (!res.ok) {
		throw new Error("Failed to fetch devices");
	}

	return res.json();
}

type Props = {
	params: Promise<{ slug: string }>
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
	const {slug} = await params;
	const device = await getDevices(slug);

	return {
		title: `${device.brand} ${device.model}`,
		description: Object.values(device.specs).join(', '),
		openGraph: {
			title: `${device.brand} ${device.model}`,
			description: Object.values(device.specs).join(', '),
			images: [
				{
					url: device.image,
					width: 300,
					height: 300,
				},
			],
		},
	};
}

const DevicePage = async ({params}: Props) => {
	const {slug} = await params;

	const device = await getDevices(slug);

	return <Container classNames={'my-10 flex-col justify-items-center min-h-screen'}>
		<h1>{`${device.brand} ${device.model}`}</h1>
		<Image src={device.image} alt={`${device.brand} ${device.model}`} width={300} height={300}/>
		<p>{Object.values(device.specs).join(', ')}</p>
	</Container>
};

export default DevicePage;
