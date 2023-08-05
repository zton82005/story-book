import Image from "next/image";

const Pagesix = () => {
	return (
		<div className="bg-white flex flex-col items-center justify-center w-auto m-auto md:p-5">
			<Image
				src="/sheldon.png"
				alt="Monsters"
				width={398}
				height={398}
				className="flex md:my-10 align-center items-center justify-center rounded-md my-12"
				priority
			/>
			<p className="text-black text-center text-base md:text-xl mt-3">
				In that moment, Shadow remembered an old story about a legendary ninja
				cat who fought bravely against all odds. He realized that he could
				become just like that ninja cat – brave, strong, and fearless. With the
				support of his friends, he decided to face his fears and join them in
				their fight against the giant monsters.
			</p>
		</div>
	);
};

export default Pagesix;
