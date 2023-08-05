import Image from "next/image";

const Pagefour = () => {
	return (
		<div className="bg-white flex flex-col items-center justify-center w-auto m-auto md:p-5">
			<Image
				src="/monsters.png"
				alt="Monsters"
				width={400}
				height={400}
				className="flex md:my-10 align-center items-center justify-center rounded-md my-12"
				priority
			/>
			<p className="text-black text-center text-base md:text-xl mt-3">
				One stormy afternoon, while Stuart, Eury, Penny, and her mother Jazz
				were playing at the park, a fierce lightning storm struck. The sky lit
				up with bolts of lightning, and the ground shook with thunder as giant
				monsters emerged from the nearby woods. The town was under attack!
			</p>
		</div>
	);
};

export default Pagefour;
