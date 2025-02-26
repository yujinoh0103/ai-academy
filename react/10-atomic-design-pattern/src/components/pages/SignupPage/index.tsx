import { useForm } from "../../../hooks/useForm";

export function SignupPage() {
  const { data, handleChange, handleSubmit } = useForm({
    initialValues: {
      id: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      if (values.password !== values.passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다.");
        return true;
      }

      const users = JSON.parse(localStorage.getItem("user") || "[]");
      users.push({ id: values.id, password: values.password });
      localStorage.setItem("user", JSON.stringify(users));

      console.log(values);
    },
  });

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="id"
            placeholder="ID"
            onChange={handleChange}
            value={data.id}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={data.password}
          />
        </div>
        <div>
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Password Confirm"
            onChange={handleChange}
            value={data.passwordConfirm}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
