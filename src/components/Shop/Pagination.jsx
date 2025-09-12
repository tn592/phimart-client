const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
	return (
		<div className="flex justify-center">
			{Array.from({ length: totalPages }, (_, i) => (
				<button
					key={i}
					onClick={() => handlePageChange(i + 1)}
					className={`mx-1 px-3 py-1 rounded mb-6 ${currentPage === i + 1 ? "bg-secondary text-white" : "bg-gray-200"}`}
				>
					{i + 1}
				</button>
			))}
		</div>
	);
};

export default Pagination;
