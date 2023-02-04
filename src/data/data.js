const videos = [
    {
        id: 1,
        img: 'https://avatar-ex-swe.nixcdn.com/song/share/2022/08/05/a/9/1/b/1659667076562.jpg',
        avatar: 'https://yt3.googleusercontent.com/YYZ33-t_ppWUKhWB9AjdKNMoNBqY0069suU-wUJ_jj4qm6XK4wvkGJOKA2Wgm_6Aqqveh5JLbQ=s900-c-k-c0x00ffffff-no-rj',
        title: 'Vì Anh Đâu Có Biết - Madihu (feat. Vũ.) | Official MV',
        username: 'Madihu',
        viewers: "21 Tr viewers",
        time: '5 months ago'
    },
    {
        id: 2,
        img: 'https://i.ytimg.com/vi/uGp3OzsievA/maxresdefault.jpg',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkYWXqKVfc8KnIM5cRs8ApqGDaQPC-iVuthP5EE0SJjg&s',
        title: 'LIVERPOOL - BRIGHTON | 90 PHÚT CỦA SIÊU PHẨM',
        username: 'Kplus ',
        viewers: "2.1 Tr viewers",
        time: '2 weeks ago'
    },
    {
        id: 3,
        img: 'https://i.ytimg.com/vi/VMcEjQsuzpc/maxresdefault.jpg',
        avatar: 'https://yt3.googleusercontent.com/53V7RU6pWz1ypSTwa7o0pCOCOrzfACeGmDvC5P1HK7Y6LjoSHxKrowpXm_NRBMUmzDX2aGEVSNQ=s900-c-k-c0x00ffffff-no-rj',
        title: 'Những xu hướng thương mại điện tử | VTV24',
        username: 'VTV24',
        viewers: "300 N viewers",
        time: '1 day ago'
    },
    {
        id: 4,
        img: 'https://pic-bstarstatic.akamaized.net/ugc/84afa844d03e944b116bfbff0cb5cf13.jpg@960w_540h_1e_1c_1f.webp',
        avatar: 'https://yt3.googleusercontent.com/ytc/AL5GRJUG3P0SUwut7bBOEtjiXmtE9VzcmZIZGWk5q7nEwA=s900-c-k-c0x00ffffff-no-rj',
        title: 'Doraemon Movie 41 | Nobita và Cuộc chiến Vũ trụ tí hon',
        username: 'Pops Kids',
        viewers: "12.5 Tr viewers",
        time: '1 months ago'
    },
    {
        id: 5,
        img: 'https://i.ytimg.com/vi/bdv_0mCtTF8/maxresdefault.jpg?v=63d79a13',
        avatar: 'https://yt3.googleusercontent.com/ytc/AL5GRJVOZuj3pW9yL8hRwGdSMg0RYoZ66DarcwGqD_DOHA=s900-c-k-c0x00ffffff-no-rj',
        title: 'Công nghệ 3D có phải CỨU CÁNH cho giới làm phim ?',
        username: 'Phê phim',
        viewers: "52 N viewers",
        time: '17 hours ago'
    },
    {
        id: 6,
        img: 'https://i.ytimg.com/vi/Xc5hXXQGt60/maxresdefault.jpg',
        avatar: 'https://yt3.googleusercontent.com/OwNdrytUVPAA0euZ1qO_8wpVHZcKB5fB08YqDEu62vQLWZFwOGhlZ4rL1zggtmkzrUeC9p2wjA=s176-c-k-c0x00ffffff-no-rj-mo',
        title: 'TẠI SAO MAN CITY - PEP GUARIOLA LẠI ĐÁ ĐÍT JOAO...',
        username: 'Góc khán đài',
        viewers: "12.5 Tr viewers",
        time: '1 year ago'
    },
    {
        id: 7,
        img: 'https://i.ytimg.com/vi/1dlTWaiBZDw/maxresdefault.jpg  ',
        avatar: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/4/1/9/d419b590efd11f7753467fc1b547d414.jpg',
        title: 'Dont Côi - RPT Orijinn x Ronboogz(Visualizer)',
        username: 'RPT ORIJINN',
        viewers: "7.6 Tr viewers",
        time: '2 months ago'
    },
    {
        id: 8,
        img: 'https://i.ytimg.com/vi/dGoHLoDmHdI/maxresdefault.jpg',
        avatar: 'https://znews-photo.zingcdn.me/w660/Uploaded/ofh_btgazspf/2020_04_24/64401109_131613488040760_1851389804824529816_n_1.jpg',
        title: '[MV] 카더가든 - Scars leave beautiful trace',
        username: 'DOM 카더가',
        viewers: "2.1 Tr viewers",
        time: '7 months ago'
    },
]

export const relatedVideos = [
    {
        id: 1,
        img: 'https://i.ytimg.com/vi/GPXuaP2lVEs/maxresdefault.jpg',
        title: 'LIVERPOOL - CHELSEA | THE KPOP GÂY THẤT VỌNG, ALFIELD XÁC LẬP KỈ LUẬT,...',
        username: 'Kplus Sports',
        views: '1.9M views',
        time: '9 days ago'
    },
    {
        id: 2,
        img: 'https://i.ytimg.com/vi/OsQN3F74a9s/maxresdefault.jpg',
        title: 'MAN CITY - TOTTENHAM | CẢM XÚC THĂNG HOA Ở 2 HIỆP ĐẤU, NGƯỜI ...',
        username: 'Kplus Sports',
        views: '2.7M views',
        time: '11 days ago'
    },
    {
        id: 3,
        img: 'https://i.ytimg.com/vi/c4CP4uPyfsY/maxresdefault.jpg',
        title: 'ARSENAL - BRIGHTON | GIAI ĐOẠN THEN CHỐT CỦA MÙA GIẢI VÀ SAI LẦM XUẤT HIỆN...',
        username: 'Kplus Sports',
        views: '1.5M views',
        time: '4 weeks ago'
    },
    {
        id: 4,
        img: 'https://vtv1.mediacdn.vn/thumb_w/650/2022/12/18/thumbhighlightsh1-167137907219183340319-crop-1671379171670872849175.jpg',
        title: 'HIGHTLIGHT Hiệp 1 | ĐT Argentina vs ĐT Pháp | Chung kếp FIFA World Cup...',
        username: 'VTV Thể Thao',
        views: '10M views',
        time: '1 month ago'
    },
    {
        id: 5,
        img: 'https://i.ytimg.com/vi/fIxf0aBAjE4/maxresdefault.jpg',
        title: 'Real Madrid vs Barcelona 3-1 All Goals & Hightlights 2023',
        username: 'Soccer Prime',
        views: '3.4M views',
        time: '2 years ago'
    },
    {
        id: 6,
        img: 'https://cdn.baogiaothong.vn/upload/images/2022-4/article_img/2022-12-25/img-bgt-2021-maxresdefault-1671985434-width1280height720.jpg',
        title: '[Premier League 2022/2023] Arsenal vs West Ham 27/12',
        username: 'Bản tin bóng đá',
        views: '6.2K views',
        time: '1 month ago'
    },
    {
        id: 7,
        img: 'https://i.ytimg.com/vi/hSeqyMmWBJU/maxresdefault.jpg',
        title: 'VÌ SAO JADON SANCHO BIẾN MẤT LÂU ĐẾN VẬY ?  ',
        username: 'BLV Anh Quân Stories',
        views: '30K views',
        time: '4 hours ago'
    },
    {
        id: 8,
        img: 'https://i.ytimg.com/vi/rjgkqyeS7hg/maxresdefault.jpg',
        title: 'PAPtv Cơm nguội 284: Siêu Đòi Nợ - PHIM HÀI TẾT 2023',
        username: 'PAPTV',
        views: '2.9M views',
        time: '9 days ago'
    },
    {
        id: 9,
        img: 'https://i.ytimg.com/vi/OkF8Il_3Rgc/maxresdefault.jpg',
        title: '2 Ngày 1 Đêm Việt Nam - Tập 25: Trường Giang giải thích "sự cố" tại An Giang',
        username: '2 NGÀY 1 ĐÊM VIỆT NAM',
        views: '7.1M views',
        time: '2 weeks ago'
    },
    {
        id: 10,
        img: 'https://i.ytimg.com/vi/eQKPTiwFdPM/maxresdefault.jpg',
        title: 'Sóng 23 - Chương trình giải trí Đêm Giao Thừa 2023 hội tụ hơn 100 nghệ sĩ hàng đầu',
        username: 'Vie channel - MUSIC',
        views: '4.5M views',
        time: '9 days ago'
    },
    {
        id: 5,
        img: 'https://i.ytimg.com/vi/9F4cRCZrsRk/mqdefault.jpg',
        title: 'MORINHO "NHẮC KHÉO" MAN UTD QUYẾT TÂM TẬU DROGBA 2.0',
        username: 'Random Football',
        views: '20k views',
        time: '5 hours ago'
    },
]

export default videos;