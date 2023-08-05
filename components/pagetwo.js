import Image from "next/image";

const Pagetwo = () => {
	return (
		<div className="bg-white flex flex-col items-center justify-center w-auto m-auto md:p-5">
			<p className="text-black text-center text-base md:text-xl my-3">
				Despite his fear, Shadow had two loyal cat friends named Stuart and
				Eury, who were brave and adventurous. They were always looking for
				exciting things to do around Begongville. They were inseparable and
				would often be seen chasing butterflies or climbing trees together.
			</p>
			<Image
				src="/cats2.png"
				alt="Stuart and Eury"
				width={400}
				height={400}
				className="flex md:my-10 align-center items-center justify-center rounded-md"
				priority
			/>
		</div>
	);
};

export default Pagetwo;
