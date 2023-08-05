import Image from "next/image";

const Pagefive = () => {
	return (
		<div className="bg-white flex flex-col items-center justify-center w-auto m-auto md:p-5">
			<p className="text-black text-center text-base md:text-xl mt-2">
				Stuart and Eury weren't afraid and were ready to face the monsters
				head-on. Penny and her mother Jazz bravely stood beside them, prepared
				to defend their beloved town. But Shadow, the scaredy cat, was hiding
				under a bench, trembling with fear each time lightning flashed.
			</p>
			<Image
				src="/cats3.png"
				alt="Jazz and Penny"
				width={350}
				height={350}
				className="flex md:my-10 align-center items-center justify-center rounded-md"
				priority
			/>
			<p className="text-black text-center text-base md:text-xl mt-1">
				Seeing their friend in distress, Stuart and Eury rushed to Shadow's
				side. They told him that they believed in him and knew he could be brave
				too. With their encouragement, Shadow started to feel a newfound courage
				welling up inside him.
			</p>
		</div>
	);
};

export default Pagefive;
