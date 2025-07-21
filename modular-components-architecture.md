Follow strictly on the requirements below for generating a plug-and-play modular component system:

---

## **Core Architectural Requirements**

Must use COSMOS UI.

For any chart and data visualisation, MUST use highcharts.


### **Modular Component Folder Structure**

* Each modular component must have a folder structure as follows:

```bash
src/components/modules/[ModuleName]/
├── index.tsx
├── README.md
├── hooks/
│   └── use[ModuleName]Data.ts
├── utils/
│   └── fetchData.ts
├── types/
│   └── [ModuleName].types.ts
├── components/
│   └── ui/
├── metadata.json
├── registry.ts
└── [ModuleName].tsx
```

### **Primitive Components Layer**

* Build low-level, stateless, styled components (`Input`, `Button`, `Card`, etc.)
* Keep logic minimal and focus on appearance/interaction
* Make them theming- or design-token-aware
* No modification must be made to the primitive components

---

### **Rulings Layer (Rule Constants)**

* Externalize all logic-related rules into structured constant files
* Rules should include validation, visibility, layout constraints, business logic flags
* Allow merging with developer overrides at runtime

```ts
// Example
export const FORM_RULES = {
  userProfile: {
    email: { required: true, readOnly: false },
    age: { min: 18, max: 99 }
  }
}
```

---

### **Modular Component Layer**

* Compose primitive components using rulings
* Accept rules and data source as props (or pull from context)
* Encapsulate use-case-specific UI (e.g., `UserProfileForm`, `CheckoutWizard`)
* Allow overrides via props or config

---

### **Pluggable Data Connectors**

* Create interfaces like `UserDataSource` with `fetch()` and `submit()` methods
* Implement connectors that wrap API calls (REST, GraphQL, LocalStorage)
* Inject data connector into modular components dynamically

```ts
<[ModuleName] dataSource={userApiConnector} />
```

---

## 📦 **Packaging & Developer Experience**

### **Metadata for Use Case Mapping**

* Include `metadata.json` per module with:

  * Description
  * Use cases
  * Inputs/outputs
  * Ruling + connector mapping

```json
{
  "name": "[ModuleName]",
  "useCases": ["usecase1", "usecase2"],
  "dataSource": "UserDataSource",
  "description": "Description of the module",
  "usageTimes": 0
}
```