import Image from "next/image";

const Pagenine = () => {
	return (
		<div className="bg-white flex flex-col items-center justify-center w-auto m-auto md:p-5">
			<p className="text-black text-center text-base md:text-xl mt-3">
				Together, the brave team of cats and greyhounds fought fiercely against
				the giant monsters. They worked as a well-coordinated unit, each
				contributing their strengths to save Begongville and its residents.
			</p>
			<p className="text-black text-center text-base md:text-xl mt-3">
				In the end, they managed to defeat the monsters and send them back to
				where they came from. The town cheered for their courageous heroes -
				Stuart, Eury, Penny, Jazz, and, of course, the brave ninja cat, Shadow.
			</p>
			<Image
				src="/townfolks.png"
				alt="Town folks"
				width={400}
				height={400}
				className="flex md:my-10 align-center items-center justify-center rounded-md"
				priority
			/>
		</div>
	);
};

export default Pagenine;
