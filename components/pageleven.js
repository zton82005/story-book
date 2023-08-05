import Image from "next/image";

const Pageeleven = () => {
	return (
		<div className="bg-white flex flex-col align-middle items-center justify-center w-auto m-auto md:p-5">
			<Image
				src="/paw.png"
				alt="Paw"
				width={200}
				height={200}
				className="flex mt-10 align-center items-center justify-center rounded-md"
				priority
			/>
			<h2 className="text-red-950 text-center font-bold text-4xl mt-2">
				The End
			</h2>
		</div>
	);
};

export default Pageeleven;
