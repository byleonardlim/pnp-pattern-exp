Follow strictly on the requirements below for generating a plug-and-play modular component system:

---

## **Core Architectural Requirements**

COSMOS UI must be used for every use case. Analyse component usage thoroughly. Do not modify the COSMOS UI code.

highcharts must be used for any data visualisation and chart rendering. Strictly follow the highcharts documentation on the implementation and chart types through https://www.highcharts.com/docs/index. Do not modify the highcharts code.

### **Modular Component Folder Structure**

* Each modular component must have a folder structure as follows:

```bash
src/
└── modules/
    └── [module-name]/                  # Module root
        ├── components/                 # Module-specific components
        │   ├── ui/                     # Presentational components
        │   │   ├── [component-name].tsx
        │   │   └── index.ts
        │   └── container/              # Container components
        │       └── [container-name].tsx
        │
        ├── hooks/                      # Custom hooks
        │   ├── use[ModuleName]Data.ts  # Data fetching/state management
        │   └── use[ModuleName]Logic.ts # Business logic
        │
        ├── store/                      # State management
        │   └── [module-name].slice.ts  # Redux/Context slice
        │
        ├── types/                      # TypeScript types
        │   └── [module-name].types.ts
        │
        ├── utils/                      # Utility functions
        │   ├── api/                    # API calls
        │   │   └── [module-name].api.ts
        │   └── helpers/                # Helper functions
        │       └── [module-name].utils.ts
        │
        ├── config/                     # Configuration
        │   ├── [module-name].config.ts
        │   └── [module-name].rules.ts  # Validation/business rules
        │
        ├── docs/                       # Documentation
        │   └── README.md
        │
        ├── __tests__/                  # Test files
        │   ├── unit/
        │   └── integration/
        │
        ├── [module-name].tsx           # Main component
        ├── index.ts                    # Public API
        └── [module-name].metadata.json # Module metadata
```

## **Generation Best Practices**
Strictly follow these best practices when generating modular components:

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
<[module-name] dataSource={userApiConnector} />
```

---

## *Packaging & Developer Experience**

### **Metadata for Use Case Mapping**

* Include `metadata.json` per module with:

  * Description
  * Use cases
  * Inputs/outputs
  * Ruling + connector mapping

```json
{
  "name": "[module-name]",
  "useCases": ["usecase1", "usecase2"],
  "dataSource": "UserDataSource",
  "description": "Description of the module-name",
  "usageTimes": 0
}
```