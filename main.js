function danhSach() {
    const thanhVien = [
        { hoTen: "Nguyễn Việt Anh", gioiTinh: "Nam", noiSinh: "Thanh Hóa" },
        { hoTen: "Nguyễn Việt Hoàng An", gioiTinh: "Nam", noiSinh: "Hà Nội" },
        { hoTen: "Nguyễn Ngọc Bích", gioiTinh: "Nữ", noiSinh: "Hà Nội" },
        { hoTen: "Lại Văn Hưng", gioiTinh: "Nam", noiSinh: "Thanh Hóa" },
        { hoTen: "Trần Duy Hưng", gioiTinh: "Nam", noiSinh: "Hà Nội" },
        { hoTen: "Nguyễn Ngọc Linh", gioiTinh: "Nữ", noiSinh: "Hà Nội" },
        { hoTen: "Vũ Văn Luân", gioiTinh: "Nam", noiSinh: "Hà Nội" },
    ];

    // Tìm phần tử có tên danhSach và gán vào biến table
    const table = document.getElementById('danhSach');
    
    table.innerHTML = `
    <tr>
        <th>Họ Tên</th>
        <th>Giới Tính</th>
        <th>Nơi Sinh</th>
    </tr>
`;

// Thêm dữ liệu thành viên vào bảng
for (const tv of thanhVien) {
    const row = `
        <tr>
            <td>${tv.hoTen}</td>
            <td>${tv.gioiTinh}</td>
            <td>${tv.noiSinh}</td>
        </tr>
    `;
    table.innerHTML += row;
}
}
