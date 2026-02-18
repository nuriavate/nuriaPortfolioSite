export default function ButtonText({ src, text }) {
    return (
        <div className="mt-10 flex items-center gap-x-6">
            <a
                href={src}
                className=" inline-flex items-center justify-center min-w-[180px] rounded-md bg-[#E63A27] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#FF5542] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E63A27]"
            >
                {text}
            </a>
        </div>
    );

}