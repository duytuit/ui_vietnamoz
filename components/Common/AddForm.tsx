import { classNames } from "primereact/utils";
import FormInput from "./FormInput";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";

export const CalendarForm = (props) => {
    const { label, ...prop } = props;

    return (
        <div className="flex mb-3">
            <label className="block text-900 font-medium w-3 mr-5">{label}</label>
            <Calendar {...prop} showIcon className="w-9" showTime hourFormat="24" />
        </div>
    )
}

export const InputTextareaForm = (props) => {
    const { id, label, className, ...inputprop } = props;
    return (
        <div className="flex mb-6">
            <label htmlFor={id} className="block text-900 font-medium w-4 mr-2">{label ? label : 'Mô tả'}</label>
            <InputTextarea autoResize id={id} rows={6} cols={30} className={classNames("w-full", className)} {...inputprop} />
        </div>
    )
};

export const InputSwitchForm = (props) => {
    const { label, className, ...inputprop } = props;
    return (
        <div className="flex mb-3">
            <label className="block text-900 font-medium w-3 mr-2">{label ? label : 'Trạng thái'}</label>
            <InputSwitch className={classNames("text-left", className)} {...inputprop} />
        </div>
    )
};

export const InputForm = (props) => {
    const { label, id, placeholder, className, ...inputprop } = props;
    return (
        <div className="flex mb-1">
            <label htmlFor={id} className="block mt-2 text-900 font-medium w-4 mr-2">{label}</label>
            <FormInput id={id} label={label} placeholder={placeholder || `Nhập ${label.toLowerCase()}`}
                className={classNames("w-full", className)} {...inputprop} />
        </div>
    )
};

export const DropdownForm = (props) => {
    const { label, optionLabel, optionValue, placeholder, className, ...inputprop } = props;
    return (
        <div className="w-full flex align-items-center mb-3">
            <label className="block text-900 font-medium w-4 mr-2">{label}</label>
            <Dropdown filter className={classNames("w-full", className)}
                optionLabel={optionLabel ? optionLabel : 'name'} optionValue={optionValue ? optionValue : 'id'}
                placeholder={placeholder || `Chọn ${label.toLowerCase()}`} {...inputprop} />
        </div>
    )
};

// export const AddForm = (props) => {
//     const navigate = useNavigate();
//     const permissionTool = useSelector(state => state.permission).permissionTool;
//     const { checkId, title, loading, onSubmit, className, moreOptions, route, ...prop } = props;
//     return (
//         <div className={classNames("card", className)} {...prop}>
//             <div className="flex justify-content-between align-items-center mb-4">
//                 <h4 className="m-0">{checkId ? 'Cập nhật' : 'Thêm mới'} {title}</h4>
//                 {moreOptions && moreOptions.id && <MoreOptions value={moreOptions} />}
//             </div>
//             <form onSubmit={onSubmit}>
//                 {props.children}
//                 <div className="w-full justify-content-end flex">
//                     <Button type='button' onClick={() => navigate(-1)} label="Trở về" className="ml-2" severity="secondary" size="small" outlined />
//                     {permissionTool.includes(route) && <Button type='submit' loading={loading} label={checkId ? "Cập nhật" : "Thêm mới"}
//                         className="ml-2" severity="info" size="small" raised />}
//                 </div>
//             </form>
//         </div>
//     )
// };