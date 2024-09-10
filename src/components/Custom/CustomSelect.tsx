interface OptionType {
    id: number;
    nameValue: string;
}

interface CustomSelectProps {
    options: OptionType[];
    value: string;
    setValue: (name: string, value: string) => void;
    nameInput: string;
    valueInput: string;
    valueNameInput: string;
    onchangeInput: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    isLoading?: boolean;
    classNames?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    value,
    setValue,
    nameInput,
    valueInput,
    onchangeInput,
    isLoading = false,
    classNames,
}) => {
    return (
        <div className="relative w-[100%] h-fit min-w-[100px] inline-flex flex-col">
            <h1 className="text-[12px] pl-2 capitalize absolute text-[#000000] font-semibold">
                {valueInput}
            </h1>
            <svg className="w-2 h-2 absolute top-0 right-0 m-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232">
                <path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" />
            </svg>
            <select
                className={`
                    border-[#909090] text-foreground border-2 w-full min-w-[100px] 
                    rounded-md h-[48px] pl-5 pr-10 bg-white focus:outline-none appearance-none
                    ${classNames ? classNames : ""} `}
                value={value}
                onChange={onchangeInput}
            >
                <option
                    key={"disable"}
                    value={""}
                    onChange={() => setValue(nameInput, "")}
                >
                    Seleccione {valueInput}
                </option>
                {!isLoading && options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.nameValue.length >= 20
                            ? `${option.nameValue.slice(0, 20)}...`
                            : option.nameValue}
                    </option>
                ))}
            </select>
        </div>
    );
};