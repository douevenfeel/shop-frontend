export type DropdownProps = {
    value: DropdownValueProps;
    valuesArr: DropdownValueProps[];
    handleDropdownValue: (value: DropdownValueProps) => void;
};

export type DropdownValueProps = { title: string; order: [string, string] };
