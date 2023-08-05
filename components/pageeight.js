import Image from "next/image";

const Pageeight = () => {
	return (
		<div className="bg-white flex flex-col items-center justify-center w-auto m-auto md:p-5">
			<Image
				src="/bg3.png"
				alt="Monsters"
				width={478}
				height={478}
				className="flex md:my-10 align-center items-center justify-center rounded-md my-12"
				priority
			/>
			<p className="text-black text-center text-base md:text-xl mt-3">
				And in the midst of the chaos, Shadow, the once scaredy cat, surprised
				everyone with his newly acquired ninja skills. He moved with grace and
				precision, delivering ninja kicks and slashes to the monsters, helping
				his friends in the battle. His transformation from a scaredy cat to a
				ninja cat was truly remarkable.
			</p>
		</div>
	);
};

export default Pageeight;
