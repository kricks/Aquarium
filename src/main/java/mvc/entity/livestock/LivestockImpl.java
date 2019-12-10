package mvc.entity.livestock;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "LIVESTOCK")
public class LivestockImpl implements Livestock {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer livestockId;

	@Column(name = "NAME", nullable = false)
	private String name;

	@Column(name = "SPECIES", nullable = false)
	private String species;

	@Column(name = "GENDER", nullable = true)
	private String gender;

	@Column(name = "NOTES", nullable = true)
	private String notes;

	@Column(name = "aquariumId", nullable = false)
	private Integer aquariumId;

//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "aquariumId")
//	private AquariumImpl aquariumImpl;

	public Integer getLivestockId() {
		return livestockId;
	}

	public void setLivestockId(Integer livestockId) {
		this.livestockId = livestockId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSpecies() {
		return species;
	}

	public void setSpecies(String species) {
		this.species = species;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Integer getAquariumId() {
		return aquariumId;
	}

	public void setAquariumId(Integer aquariumId) {
		this.aquariumId = aquariumId;
	}

//	public AquariumImpl getAquariumImpl() {
//		return aquariumImpl;
//	}
//
//	public void setAquariumImpl(AquariumImpl aquariumImpl) {
//		this.aquariumImpl = aquariumImpl;
//	}

}
