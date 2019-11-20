package mvc.model;

public class Tank {

	private Long id;
	private String name;
	private String type;
	private Integer gallon;
	private String notes;
	
	public Tank() {
		
	}
	
	public Tank(Long id, String name, String type, Integer gallon, String notes) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.gallon = gallon;
		this.notes = notes;
	}
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Integer getGallon() {
		return gallon;
	}

	public void setGallon(Integer gallon) {
		this.gallon = gallon;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

//	public String toString() {
//		return "Id = " + id + ", name = " + name + ", type = " + type + ", gallons = " + gallon + ", notes = " + notes;
//	}

}
