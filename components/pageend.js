import Image from "next/image";

const Pageend = () => {
	return (
		<div className="bg-white flex flex-col items-center justify-center w-auto m-auto md:p-5">
			<Image
				src="/sheldon1.png"
				alt="Sheldon"
				width={435}
				height={435}
				className="flex md:my-10 align-center items-center justify-center rounded-md my-12"
				priority
			/>
			<p className="text-black text-center text-base md:text-xl mt-3">
				In memory of Sheldon.
			</p>
		</div>
	);
};

export default Pageend;
