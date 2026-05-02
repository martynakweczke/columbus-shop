type HeaderProps = {
    title: string;
};

export const Header = ({ title }: HeaderProps) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};