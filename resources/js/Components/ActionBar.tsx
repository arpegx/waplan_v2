export default function ActionBar({ children, className = "" }: any) {
    return (
        <div id="ActionBar" className={className}>
            {children}
        </div>
    );
}
