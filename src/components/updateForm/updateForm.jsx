import { useState } from "react"
import CustomTable from "./table"






const CustomUpdateForm = () => {

    const initialData = {
        name: "",
        password: "",
        conformPassword: "",
        mobile: "",
    }

    const [form, setForm] = useState(initialData)

    const [formErr, setFormErr] = useState({
        nameErr: "",
        passwordErr: "",
        confirmpasswordErr: "",
        mobileErr: ""
    })

    const [submitted, setSubmmited] = useState([])

    const clickToChange = (event) => {
        const { name, value } = event.target
        console.log(name, value)

        setForm(({
            ...form,
            [name]: value
        }))
    }

    const validate = () => {

        let error = {
            nameErr: "",
            passwordErr: "",
            confirmpasswordErr: "",
            mobileErr: ""
        }
        if (!form.name) {
            error.nameErr = "Enter the user name"
        }
        if (!form.password) {
            error.passwordErr = "Enter the password"
        } else if (!/^[A-Z][a-z][0-9]{9}$/.test(form.password)) {
            error.passwordErr = "Enter the correct password"
        } else if (form.password !== form.conformPassword) {
            error.confirmpasswordErr = "confrim the password"
        }
        if (!form.mobile) {
            error.mobileErr = "Enter the mobile number"
        } else if (/^[6-9][0-9]{9}/.test(form.mobile)) {
            error.mobileErr = "Enter the valid mobile number"
        }
        return error
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const error = validate();

        const newData = {
            data1: form.name,
            data2: form.password,
            data3: form.conformPassword,
            data4: form.mobile
        }

        setForm(initialData)

        setSubmmited([...submitted, newData])
        if (Object.values(error).some(errors => errors)) {
            setFormErr(error);
        } else {
            // Handle successful form submission (e.g., API call)
            console.log("Form submitted successfully", form);
        }
    };
    console.log(form);


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Enter name" value={form.name} name="name" onChange={clickToChange} />
                {formErr.nameErr && <span>{formErr.nameErr}</span>}
                <input type="password" placeholder="Enter password" value={form.password} name="password" onChange={clickToChange} />
                {formErr.passwordErr && <span>{formErr.passwordErr}</span>}
                <input type="password" placeholder="confrim password" value={form.conformPassword} name="confrimPassword" onChange={clickToChange} />
                {formErr.confirmpasswordErr && <span>{formErr.confirmpasswordErr}</span>}
                <input type="text" placeholder="Enter mobile number" value={form.mobile} onChange={clickToChange} name="mobile" />
                {formErr.mobileErr && <span>{formErr.mobileErr}</span>}
                <button>submit</button>
            </form>
            <CustomTable rowData={submitted} />
        </div>

    )
}
export default CustomUpdateForm


