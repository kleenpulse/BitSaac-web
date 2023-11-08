import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiCubeFill } from "react-icons/pi";

type BlogCardProps = {
	label: string;
	title: string;
	time: string;
	desc: string;
	image: string;
	id: number;
	icon?: boolean;
};

const BlogCard = ({
	label,
	title,
	time,
	desc,
	image,
	id,
	icon,
}: BlogCardProps) => {
	return (
		<div className="flex items-start justify-between flex-col gap-y-4 w-full max-w-[350px] sm:max-w-[500px] lg:max-w-[500px] border border-gray-200 p-1 rounded-xl hover:shadow-[0_0_40px_0_rgba(0,0,0,0.2)] xl:hover:shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] transition-all hover:duration-700 duration-300">
			<div className="w-full overflow-hidden">
				<Image
					src={image}
					width={600}
					height={400}
					alt="blog image"
					className="hover:scale-125 transition-all hover:duration-1000 duration-300 rounded-xl"
				/>
			</div>
			<div className="flex flex-col gap-y-4">
				<p className="flex items-center  gap-x-5 text-gray-950 font-semibold w-full">
					<span className="bg-[#F4F4F4] px-2 py-1 capitalize">{label}</span>
					<span>{time}</span>
				</p>
				<h3 className="text-xl lg:text-2xl  font-medium sm:font-bold">
					{title}
				</h3>
				<p className="text-gray-700 sm:text-lg font-Roboto">
					{desc.length > 100 ? `${desc.slice(0, 100)}...` : desc}
				</p>
			</div>
			<Link
				href={`/blog/${id}`}
				className="text-[#4D61F4] font-medium text-lg 2xl:text-2xl my-4 font-Roboto flex items-center gap-x-2"
			>
				<span>Read more</span> {icon && <PiCubeFill />}
			</Link>
		</div>
	);
};

export default BlogCard;
