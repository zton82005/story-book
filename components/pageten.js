import Image from "next/image";

const Pageten = () => {
	return (
		<div className="bg-white flex flex-col items-center justify-center w-auto m-auto md:p-7">
			<Image
				src="/bg2.png"
				alt="Shadow Ninja Pose"
				width={435}
				height={435}
				className="flex md:my-10 align-center items-center justify-center rounded-md my-12"
				priority
			/>
			<p className="text-black text-center text-base md:text-xl mt-3">
				From that day forward, Shadow was known as the fearless ninja cat of
				Begongville. He realized that with the support of his friends and a
				belief in himself, he could overcome any fear. And so, they all lived
				happily ever after, protecting Begongville from any threats that might
				come its way.
			</p>
		</div>
	);
};

export default Pageten;
