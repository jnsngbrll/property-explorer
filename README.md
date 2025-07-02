# 📱 Property Explorer

Property Explorer is a mobile app that allows users to browse, search, filter, and favorite properties. The app provides a smooth and responsive experience using React Native and modern UI libraries.

👉 **GitHub Repository:** [https://github.com/jnsngbrll/property-explorer](https://github.com/jnsngbrll/property-explorer)

---

## 🚀 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/jnsngbrll/property-explorer.git
   ```
2. Navigate to the project folder:
   ```bash
   cd property-explorer
   ```
3. Install all dependencies:
   ```bash
   npm install
   ```
4. Start the Expo server:
   ```bash
   npx expo start
   ```

---

## 🛠️ App Structure & Tech Choices

### 📦 Folder Structure

- `/actions` – Reusable functions
- `/app` – App screens and layouts (Home, Property Details, Favorites, Profile, Settings)
- `/assets` – Images and static files
- `/components` – Reusable components like PropertyCard, FilterBottomSheet, EmptyList
- `/constants` – Static data (property listings)
- `/hooks` – Custom hooks (e.g., useFavorites)
- `/lib` – Utils
- `/styles` – Global styles
- `/types` – TypeScript type definitions

### 🧰 Tech Stack

- **TypeScript** – Type-safe development
- **React Native (Expo)** – Mobile development framework
- **NativeWind (Tailwind CSS for React Native)** – Fast, responsive styling
- **AsyncStorage** – Local state persistence (theme & favorites)
- **@gorhom/bottom-sheet** – Smooth bottom sheet for filters
- **React Navigation** – Bottom tab navigation
- **react-native-reanimated** – Smooth animations for images and transitions

---

## ⚙️ Limitations & Assumptions

- **Static Data:** Property listings are hardcoded. In a full app, these would be fetched from a backend API.
- **No Authentication:** User login, profiles, and sessions are not yet implemented.
- **Filtering:** Current filtering is basic. It supports property type, price range, guest count, bed count, and bath count. More advanced filters like multi-select and sliders can be added.

---

## ✅ Features Completed

- Property listing with responsive cards
- Search properties by title and location
- Filtering properties by:
  - Property type
  - Price range
  - Guest count
  - Bed count
  - Bath count
- Bottom sheet for filter management
- "Clear All Filters" button
- Add and remove properties from favorites
- View favorite properties on a separate tab
- Smooth animations using `react-native-reanimated` (image fade-in, screen transitions)
- Empty state handling for both properties and favorites
- Dark mode support

---

## 🚀 Improvements With More Time

- Connect to a live API for real-time property data
- Implement user authentication and profile management
- Add advanced filtering features (multi-select, sliders, location-based filters)
- Support multiple images per property
- Improve app performance and loading states
- Optimize code structure and reusable logic
- Enhance the UI with additional polish and consistency
- Add persistent storage for offline favorites using local databases
- Improve folder structure for larger scale development

---

## 📚 Summary of Technical Exam Requirements

| Feature                                                 | Status       |
| ------------------------------------------------------- | ------------ |
| Property list with image, title, location, price        | ✅ Completed |
| Infinite scroll or pagination                           | ✅ Completed |
| Search and filter by name, location, price, type        | ✅ Completed |
| Filter bottom sheet                                     | ✅ Completed |
| Property detail screen with large image and description | ✅ Completed |
| Favorite properties management (syncs across screens)   | ✅ Completed |
| Separate Favorites tab                                  | ✅ Completed |
| Bottom tab navigation (Home, Favorites, Profile)        | ✅ Completed |
| Smooth animations                                       | ✅ Completed |
| Dark mode                                               | ✅ Completed |
