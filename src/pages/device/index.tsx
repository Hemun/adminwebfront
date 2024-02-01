import Title from "@/components/common/Title";
import Filter from "@/components/common/Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteComponents from "@/components/DeleteComponents";
import UpdateComponents from "@/components/common/UpdateComponents";
import { useState } from "react";
import FilterButton from "@/components/common/FilterButton";
import useApi from "../api/useApi";

const Device = () => {
  const { datas, loading } = useApi("http://localhost:3030/devices");

  if (!loading) {
    console.log("data shaa", datas);

    console.log(datas.data);
  }
  // console.log(data["data"]);

  let [isOpen, setIsOpen] = useState(false);
  let [isDelete, setIsDelete] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function openDelete() {
    setIsDelete(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function closeDelete() {
    setIsDelete(false);
  }
  return (
    <div className="px-5 py-5">
      <Title title="Төхөөрөмж" />
      <div className="bg-white p-5 mt-5 rounded-lg">
        <Filter
          label={["Нэр", "И-мэйл хаяг", "Утасны дугаар"]}
          type={["text", "email", "number"]}
        />
        <FilterButton />
        <div className="relative overflow-x-auto mt-3">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-slate-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  №
                </th>
                <th scope="col" className="px-6 py-3">
                  Төхөөрөмжийн дугаар
                </th>
                <th scope="col" className="px-6 py-3">
                  Төхөөрөмжийн нэр
                </th>
                <th scope="col" className="px-6 py-3">
                  Төрөл
                </th>
                <th scope="col" className="px-6 py-3">
                  Үнэ
                </th>
                <th scope="col" className="px-6 py-3">
                  Үйлдлүүд
                </th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                datas.data.map((item: any) => (
                  <tr key={item.ID} className="bg-slate-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      1
                    </th>
                    <td className="px-6 py-4">{item.deviceNo}</td>
                    <td className="px-6 py-4">{item.deviceName}</td>
                    <td className="px-6 py-4">{item.deviceTspe}</td>
                    <td className="px-6 py-4">{item.devicePrice}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon
                          onClick={() => openModal()}
                          icon={faPen}
                        />
                        <FontAwesomeIcon
                          onClick={() => openDelete()}
                          icon={faTrash}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <DeleteComponents show={isDelete} onClose={closeDelete} />
          <UpdateComponents show={isOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
};
export default Device;
