import React, {useState} from 'react';
import { addUserService } from './slice';
import { useDispatch } from 'react-redux';

function AddUser() {

    const [user, setUser] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDT: "",
        hoTen: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
    });

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("🚀 ~ AddUser ~ user: ", user);
        dispatch(addUserService(user))
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    return (
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>

            <div className="mb-5">
                <label
                    htmlFor="taiKhoan"
                    className="block mb-2.5 text-sm font-medium text-heading"
                >
                    Tai khoan
                </label>
                <input
                    type="text"
                    name="taiKhoan"
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    required
                    onChange={handleOnChange}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="password"
                    className="block mb-2.5 text-sm font-medium text-heading"
                >
                    Mat khau
                </label>
                <input
                    type="password"
                    name="matKhau"
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    required
                    onChange={handleOnChange}
                />
            </div>
            <div className="mb-5">
            <label
                htmlFor="email"
                className="block mb-2.5 text-sm font-medium text-heading"
            >
                Email
            </label>
            <input
                type="text"
                name="email"
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                required
                onChange={handleOnChange}
            />
        </div>
            <div className="mb-5">
                <label
                    htmlFor="soDT"
                    className="block mb-2.5 text-sm font-medium text-heading"
                >
                    SDT
                </label>
                <input
                    type="text"
                    name="soDT"
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    required
                    onChange={handleOnChange}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="hoTen"
                    className="block mb-2.5 text-sm font-medium text-heading"
                >
                    Ho Ten
                </label>
                <input
                    type="text"
                    name="hoTen"
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    required
                    onChange={handleOnChange}
                />
            </div>
            <button
                type="submit"
                className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
                Login
            </button>
        </form>
    );
}

export default AddUser;