import React from "react";
import { ICategory } from "../../common/types";
import { style } from "../../pages/manager/product/AdProductPage";
import Button from "../../components/ui/Button";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

interface Props {
  category: ICategory;
  index: number;
  handleDelete: (id: number) => void;
}

const CategoryItem = ({ category, index, handleDelete }: Props) => {
  return (
    <tr className="odd:bg-white even:bg-slate-100">
      <td className={style.tdClassName}>{index + 1}</td>
      <td className={style.tdClassName}>{category.name}</td>
      <td>
        <div className="" onClick={() => handleDelete(category.id!)}>
          <Button name="Remove" />
          <ToastContainer />
        </div>
        {/* <Link to={`/admin/category/${category.id}/edit`}>Edit</Link> */}
      </td>
    </tr>
  );
};

export default CategoryItem;
