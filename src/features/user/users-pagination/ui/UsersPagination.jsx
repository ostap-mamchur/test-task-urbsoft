import Pagination from "react-bootstrap/Pagination";
import { useUserStore } from "../../../../entities/user/model/store";
import { usersPerPage } from "../../../../shared/lib/constants/users-pagination";

function UsersPagination() {
  const currentPage = useUserStore((state) => state.currentPage);
  const count = useUserStore((state) => state.count);
  const nextPage = useUserStore((state) => state.nextPage);
  const prevPage = useUserStore((state) => state.prevPage);

  const totalPages = Math.ceil(count / usersPerPage);
  const canGoBack = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div className="d-flex justify-content-between">
      <span>{count} results</span>
      <Pagination>
        <Pagination.Prev disabled={!canGoBack} onClick={prevPage} />
        <Pagination.Next disabled={!canGoNext} onClick={nextPage} />
      </Pagination>
    </div>
  );
}

export { UsersPagination };
