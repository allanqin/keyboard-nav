import { useState, useEffect } from "react";

const InputNav = (props) => {
  const [data, setData] = useState(props.data);
  const [title, setTitle] = useState(props.title);
  const [dropdown, setDropdown] = useState();

  const handleDropdown = (options) => {
    const res = options.map((ele) => {
      return <option value={ele} />;
    });

    return res;
  };

  useEffect(() => {
    const sorted = [...data].sort();
    setDropdown(handleDropdown(sorted));
  }, [data]);

  return (
    <main>
      <label>
        {title}
        <input list="mylist" placeholder={title} />
      </label>
      <datalist id="mylist">{dropdown}</datalist>
    </main>
  );
};

export default InputNav;
