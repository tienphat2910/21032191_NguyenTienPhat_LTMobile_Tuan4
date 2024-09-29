import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { Text, View } from 'react-native'

// Định nghĩa component Screen01
const Screen01 = ({ navigation }) => {
    return (
        // Sử dụng ScrollView để cho phép cuộn nội dung
        <ScrollView
            style={{ flex: 1 }} // Chiếm toàn bộ không gian có sẵn
        >
            {/* View chứa hình ảnh, căn giữa theo chiều ngang */}
            <View
                style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 30 }}
            >
                {/* Hình ảnh từ thư mục assets */}
                <Image 
                    source={require('../assets/Data/Container_17.png')}
                    height={100} // Kích thước chiều cao
                />
            </View>

            {/* View chứa tiêu đề và mô tả */}
            <View>
                <Text
                    style={{ fontSize: 30, fontWeight: '600', marginLeft: 45 }} // Tiêu đề lớn
                >
                    Boost Productivity
                </Text>
                <Text
                    style={{ fontSize: 15, marginLeft: 45, color: 'gray' }} // Mô tả nhỏ hơn
                >
                    Simplify tasks, Boost Productivity
                </Text>
            </View>

            {/* Nút đăng ký */}
            <View>
                <TouchableOpacity
                    style={{
                        width: '94%', 
                        marginLeft: 16, 
                        marginTop: 11, 
                        backgroundColor: 'rgb(34 200 247)', // Màu nền của nút
                        paddingVertical: 11, 
                        borderRadius: 20 // Bo tròn góc
                    }}
                    onPress={() => navigation.navigate("Screen02")} // Điều hướng đến Screen02 khi nhấn
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Đoạn chữ "Login" */}
            <View>
                <Text style={{ color: 'black', textAlign: 'center', marginTop: 20 }}>
                    Login
                </Text>
            </View>

            {/* Indicator để hiển thị trạng thái */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <View style={{ width: 17, height: 17, borderRadius: 50, borderWidth: 1, borderColor: "rgb(34 200 247)" }}></View>
                <View style={{ width: 17, height: 17, borderRadius: 50, borderWidth: 1, borderColor: "rgb(34 200 247)", marginHorizontal: 5, backgroundColor: 'rgb(34 200 247)' }}></View>
                <View style={{ width: 17, height: 17, borderRadius: 50, borderWidth: 1, borderColor: "rgb(34 200 247)" }}></View>
            </View>
        </ScrollView>
    )
}

// Xuất component để sử dụng ở nơi khác trong ứng dụng
export default Screen01
