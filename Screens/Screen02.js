import Checkbox from 'expo-checkbox'; // Nhập Checkbox từ expo-checkbox
import React, { useState } from 'react'; // Nhập React và useState
import { TouchableOpacity, Image, View, Text, TextInput } from 'react-native'; // Nhập các component từ React Native
import Icon from 'react-native-vector-icons/FontAwesome'; // Nhập biểu tượng từ FontAwesome

// Định nghĩa component Screen02
const Screen02 = ({ navigation }) => {
    // Khai báo các state để lưu trữ thông tin
    const [isChecked, setIsChecked] = useState(false);  // Trạng thái checkbox
    const [user, setUser] = useState(''); // Trạng thái cho username
    const [email, setEmail] = useState(''); // Trạng thái cho email
    const [password, setPassword] = useState(''); // Trạng thái cho password

    const [info, setInfo] = useState({
        user: '',
        email: '',
        password: ''
    });

    return (
        <View style={{ padding: 20 }}> {/* Padding cho toàn bộ View */}
            {/* Biểu tượng mũi tên quay lại */}
            <View style={{ marginBottom: 20 }}>
                <Icon
                    name='arrow-left' // Tên biểu tượng
                    size={24} // Kích thước biểu tượng
                    color="#000" // Màu biểu tượng
                    onPress={() => { navigation.navigate("Screen01") }} // Điều hướng khi nhấn
                />
            </View>

            {/* Hình ảnh và văn bản chào mừng */}
            <View style={{ alignItems: 'center', marginBottom: 40 }}>
                <Image
                    source={require('../assets/Data/Image_19.png')} // Hình ảnh từ thư mục assets
                    style={{ width: 100, height: 100 }} // Kích thước hình ảnh
                />
                <Text style={{ fontSize: 30, fontWeight: '600', marginVertical: 10 }}>
                    Nice to see you
                </Text>
                <Text style={{ fontSize: 15, color: 'gray', textAlign: 'center' }}>
                    Create your account
                </Text>
            </View>

            {/* Form nhập liệu */}
            <View>
                {/* Input cho username với biểu tượng */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderRadius: 20, padding: 10 }}>
                    <Icon name="user" size={20} color="gray" style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Enter your username" // Placeholder cho input
                        style={{ flex: 1 }} // Chiếm toàn bộ không gian
                        value={user} // Giá trị của input
                        onChangeText={setUser} // Cập nhật trạng thái khi thay đổi
                    />
                </View>

                {/* Input cho email */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderRadius: 20, padding: 10 }}>
                    <Icon name="envelope" size={20} color="gray" style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Enter your email" // Placeholder cho input
                        style={{ flex: 1 }} // Chiếm toàn bộ không gian
                        value={email} // Giá trị của input
                        onChangeText={setEmail} // Cập nhật trạng thái khi thay đổi
                    />
                </View>

                {/* Input cho password */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderRadius: 20, padding: 10 }}>
                    <Icon name="lock" size={20} color="gray" style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Enter your password" // Placeholder cho input
                        secureTextEntry // Ẩn mật khẩu
                        style={{ flex: 1 }} // Chiếm toàn bộ không gian
                        value={password} // Giá trị của input
                        onChangeText={setPassword} // Cập nhật trạng thái khi thay đổi
                    />
                </View>
            </View>

            {/* Checkbox và điều khoản */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                <Checkbox
                    value={isChecked} // Giá trị của checkbox
                    onValueChange={setIsChecked} // Cập nhật trạng thái khi thay đổi
                    color={isChecked ? '#4630EB' : undefined} // Màu checkbox nếu được chọn
                />
                <Text style={{ marginLeft: 10 }}>
                    I agree with <Text style={{ color: '#ED6263', textDecorationLine: 'underline' }}>Terms & Conditions</Text>
                </Text>
            </View>

            {/* Nút Continue */}
            <View>
                <TouchableOpacity
                    style={{
                        width: '94%', 
                        marginLeft: 16, 
                        marginTop: 11, 
                        backgroundColor: 'rgb(34, 200, 247)', // Màu nền của nút
                        paddingVertical: 11, 
                        borderRadius: 20 // Bo tròn góc
                    }}
                    onPress={() => {
                        // Kiểm tra các trường nhập liệu trước khi điều hướng
                        if (user && email && password && isChecked) {
                            setInfo({
                                user: user,
                                email: email,
                                password: password
                            });
                            navigation.navigate("Screen03"); // Điều hướng đến Screen03
                            console.log(info); // In thông tin ra console
                        } else {
                            alert('Please fill all fields and agree to the terms.'); // Thông báo nếu chưa điền đủ
                        }
                    }}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Xuất component để sử dụng ở nơi khác trong ứng dụng
export default Screen02;
