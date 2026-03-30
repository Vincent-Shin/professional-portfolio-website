# Dark Professional Portfolio UI

Portfolio nay la mot app React + Vite mot trang. Phan lon noi dung va layout hien nam trong mot file duy nhat: `src/app/App.tsx`.

## Stack

- React 18
- Vite 6
- TypeScript
- Tailwind CSS 4
- Lucide icons

## Chay website local

Yeu cau:

- Node.js 18+ hoac 20+
- npm

Lenh chay:

```bash
npm install
npm run dev
```

Sau do mo dia chi ma Vite in ra trong terminal, thuong la:

```text
http://localhost:5173
```

## Build production

```bash
npm run build
```

File build se nam trong thu muc `dist/`.

## Website hien trong nhu the nao

Website la mot landing page portfolio 1 trang, co 2 che do:

- Light mode: thien ve ho so chuyen nghiep, mau sang, tone tuyen dung chuan
- Dark mode: ca nhan hon, nhieu hieu ung hon, co sound toggle, social links phu, va mot TikTok embed trong phan contact

Luong chinh cua trang:

1. `About Me`
2. `My Resume`
3. `Projects`
4. `Contact`

Ngoai noi dung chinh con co:

- Sidebar co dinh ben trai tren man hinh lon
- Thanh nav phia tren
- Theme toggle light/dark
- Chatbot panel dang mock UI
- Nut tai resume theo variant dang chon

## Muon sua gi thi vao dau

### 1. Sua menu dieu huong

File: `src/app/App.tsx`

Bien:

- `navItems`

### 2. Sua danh sach project trong portfolio

File: `src/app/App.tsx`

Bien:

- `projectCards`

Moi project gom:

- `id`: anchor de nhay trong trang
- `title`: ten project
- `meta`: dong phu
- `summary`: mo ta ngan
- `stack`: tech stack
- `imageLabel`: nhan placeholder hinh

### 3. Sua nhom skill va role quan tam

File: `src/app/App.tsx`

Bien:

- `capabilityGroups`

### 4. Sua 4 ban resume trong website

File: `src/app/App.tsx`

Cac bien chinh:

- `resumeVariants`: noi dung project theo tung loai resume
- `resumePdfByKey`: map tu variant sang file PDF
- `resumeMetaByKey`: core skills cua tung variant
- `extrasByKey`: extracurricular/additional items

PDF thuc te nam o:

- `public/resumes/backend-resume.pdf`
- `public/resumes/ai-engineering-resume.pdf`
- `public/resumes/data-scientist-resume.pdf`
- `public/resumes/software-engineering-resume.pdf`

Neu ban thay PDF, giu nguyen ten file hoac cap nhat lai `resumePdfByKey`.

### 5. Sua work experience

File: `src/app/App.tsx`

Bien:

- `workExperience`

### 6. Sua phan `Current Progress`

File: `src/app/App.tsx`

Bien:

- `currentProgressProjects`

### 7. Sua noi dung sidebar profile theo light/dark

File: `src/app/App.tsx`

Bien:

- `sideProfileRows`

### 8. Sua phan About / Resume / Projects / Contact trong layout

File: `src/app/App.tsx`

Cac section:

- `#about`
- `#resume`
- `#projects`
- `#contact`

Phan JSX cua cac section nay bat dau gan cac moc sau:

- `#about`: khoang dong 681
- `#resume`: khoang dong 751
- `#projects`: khoang dong 896
- `#contact`: khoang dong 937

### 9. Sua mau sac va theme nen tang

File:

- `src/styles/theme.css`

Day la noi khai bao CSS variables cho light/dark theme.

### 10. Sua entry app hoac cau hinh build

File:

- `src/main.tsx`: entry point
- `vite.config.ts`: cau hinh Vite

## Cau truc repo quan trong

```text
Dark Professional Portfolio UI/
  src/
    app/
      App.tsx              # gan nhu toan bo noi dung va layout
    styles/
      index.css            # import styles
      theme.css            # theme variables
      tailwind.css         # Tailwind source
      fonts.css            # hien dang trong
  public/
    resumes/               # PDF resume de download
  dist/                    # output sau khi build
  package.json
  vite.config.ts
```

## Hanh vi dac biet dang co trong site

- Theme duoc luu trong `localStorage` voi key `portfolio-theme`
- Sound mode duoc luu trong `localStorage` voi key `portfolio-sound`
- Chi dark mode moi co sound toggle that
- Nut `Download Resume` tai PDF theo resume variant dang chon
- Chatbot hien chi la giao dien minh hoa, chua co backend/chat logic
- Contact dark mode co embed TikTok

## Nhung cho nen uu tien tach ra neu muon de maintain hon

Hien tai file `src/app/App.tsx` kha lon. Neu muon de sua lau dai, nen tach dan thanh:

- `src/app/data/portfolio.ts` cho toan bo data
- `src/app/components/Sidebar.tsx`
- `src/app/components/AboutSection.tsx`
- `src/app/components/ResumeSection.tsx`
- `src/app/components/ProjectsSection.tsx`
- `src/app/components/ContactSection.tsx`

Nhu vay lan sau chi can sua data thay vi sua ca file JSX dai.

## Tinh trang da kiem tra

Da xac nhan lenh sau chay thanh cong:

```bash
npm run build
```

Nghia la project hien build duoc binh thuong.
