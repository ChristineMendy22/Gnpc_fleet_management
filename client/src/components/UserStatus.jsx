export const STATUS_STYLES = {
    true: "bg-emerald-100 text-emerald-700",
    false: "bg-red-100 text-red-700",
};


export const UserStatus = ({ status }) => {
    return (
        <span
        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
            STATUS_STYLES[status] ?? 'bg-emerald-100 text-emerald-700'
        }`}
        >
        {status ? 'Active' : 'Inactive'}
        </span>
    );
};