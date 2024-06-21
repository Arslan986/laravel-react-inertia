export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} style={{margin: "0px"}} className={'text-sm text-red-600' + className}>
            {message}
        </p>
    ) : null;
}
