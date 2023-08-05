import Image from "next/image";

const Pageseven = () => {
	return (
		<div className="bg-white flex flex-col items-center justify-center w-auto m-auto md:p-5">
			<p className="text-black text-center text-base md:text-xl mt-3">
				Stuart, Eury, Penny, Jazz, and now, a transformed Shadow, all teamed up
				together. They fought the monstrous creatures using their unique
				abilities. Stuart and Eury used their cat-like reflexes to dodge the
				monsters' attacks and distract them. Penny and her mother Jazz used
				their speed and strength to defend their friends and keep the monsters
				at bay.
			</p>
			<Image
				src="/fight.png"
				alt="Fight scene"
				width={400}
				height={400}
				className="flex md:my-10 align-center items-center justify-center rounded-md"
				priority
			/>
		</div>
	);
};

export default Pageseven;
